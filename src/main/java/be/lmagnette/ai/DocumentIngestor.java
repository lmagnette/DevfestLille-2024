package be.lmagnette.ai;

import be.lmagnette.models.Category;
import dev.langchain4j.classification.EmbeddingModelTextClassifier;
import dev.langchain4j.data.document.Document;
import dev.langchain4j.model.embedding.EmbeddingModel;
import dev.langchain4j.store.embedding.EmbeddingStoreIngestor;
import io.quarkiverse.langchain4j.pgvector.PgVectorEmbeddingStore;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static dev.langchain4j.data.document.splitter.DocumentSplitters.recursive;
import static java.util.Arrays.asList;

@ApplicationScoped
public class DocumentIngestor {

    @Inject
    PgVectorEmbeddingStore store;

    @Inject
    EmbeddingModel embeddingModel;

    private final  Map<Category, List<String>> examples = new HashMap<>();

    DocumentIngestor() {

        examples.put(Category.HR, asList(
                "The HR team is currently reviewing resumes to fill the open positions in the marketing department.",
                "We will conduct initial interviews next week to screen potential candidates for the software engineer role.",
                "New employees are required to attend the onboarding session to familiarize themselves with company policies and procedures.",
                "HR will provide the necessary training and resources to help new hires integrate smoothly into their roles.",
                "HR is organizing a team-building event to enhance collaboration and improve team dynamics.",
                "The HR department mediates conflicts between employees to ensure a harmonious work environment.",
                "Annual performance reviews are scheduled for next month to assess employee progress and set new goals.",
                "HR will facilitate performance improvement plans for employees who need additional support to meet their objectives.",
                "HR is responsible for managing payroll and ensuring that employees are compensated accurately and on time.",
                "Our benefits package includes health insurance, retirement plans, and paid leave, all administered by the HR department.",
                "The HR team offers a variety of professional development programs to help employees advance their skills and careers.",
                "Mandatory training sessions on workplace safety and compliance are conducted by HR every quarter.",
                "HR regularly conducts surveys to gauge employee satisfaction and identify areas for improvement.",
                "To boost employee morale, HR has implemented a recognition program that rewards outstanding performance.",
                "HR ensures that all company policies comply with labor laws and regulations to avoid legal issues.",
                "Regular audits are conducted by HR to ensure that we are adhering to employment laws and maintaining proper documentation.",
                "HR is committed to fostering a diverse and inclusive workplace where all employees feel valued and respected.",
                "We have implemented training programs to raise awareness about unconscious bias and promote inclusivity.",
                "HR is responsible for creating and maintaining a safe work environment by implementing health and safety policies.",
                "Employees must report any workplace hazards to HR to ensure that appropriate measures are taken to prevent accidents.",
                "HR conducts exit interviews to gather feedback from departing employees and understand their reasons for leaving.",
                "When an employee resigns, HR manages the offboarding process, including final pay and the return of company property.",
                "HR maintains accurate and confidential employee records, including personal information, employment history, and performance reviews.",
                "All changes to employee status, such as promotions or role changes, are updated in the HR system promptly.",
                "The HR department is responsible for developing and updating company policies to reflect current practices and legal requirements.",
                "HR policies, such as the code of conduct and anti-harassment policies, are communicated to all employees to ensure understanding and compliance.",
                "HR provides resources and support for employee well-being, including access to counseling services and wellness programs.",
                "We have implemented flexible working arrangements to support work-life balance and improve overall employee well-being."

        ));
        examples.put(Category.FINANCE, asList(
                "The finance department is preparing the annual budget to allocate resources effectively for the upcoming fiscal year.",
                "Regular budget reviews help ensure that all departments are adhering to their financial plans.",
                "Finance is responsible for maintaining accurate records of all financial transactions.",
                "The accounting team prepares monthly financial statements to provide insights into the company’s financial health.",
                "Internal audits are conducted to ensure compliance with financial policies and identify any discrepancies.",
                "External auditors will review our financial records next quarter to validate our financial integrity.",
                "The finance team ensures that the company complies with all tax regulations and files accurate tax returns.",
                "Effective tax planning can help minimize the company’s tax liabilities and optimize financial performance.",
                "Financial analysts evaluate market trends to provide forecasts and inform strategic decisions.",
                "The finance department uses various metrics to assess the profitability and sustainability of different projects.",
                "Maintaining a healthy cash flow is critical for meeting operational expenses and funding new projects.",
                "The finance team monitors cash flow closely to prevent any liquidity issues.",
                "The finance department explores investment opportunities to grow the company’s assets.",
                "Risk assessments are conducted before making any significant investments.",
                "Quarterly financial reports are presented to the board of directors to review the company’s performance.",
                "Detailed financial analyses are crucial for making informed strategic decisions."
        ));

        examples.put(Category.FLEET, asList(
                "This Car Policy outlines the rules and procedures for the allocation, use, and maintenance of company cars",
                "Company cars are primarily for business use",
                "The company provides comprehensive insurance coverage for all company cars",
                "Fuel and Expenses: Employees must use company-provided fuel cards where applicable",
                "The fleet manager oversees the maintenance and operation of all company vehicles.",
                "Regular vehicle inspections are conducted to ensure safety and reliability.",
                "Fleet management software is used to track vehicle locations and usage.",
                "Fuel efficiency programs are implemented to reduce operational costs.",
                "The company has a policy for the proper use of fleet vehicles to prevent misuse.",
                "Vehicle leasing agreements are managed by the fleet department.",
                "Company cars are provided to employees based on their job requirements and responsibilities",
                "Accident reports involving company vehicles must be filed immediately with the fleet manager.",
                "Fleet vehicles are scheduled for regular servicing to maintain optimal performance.",
                "The fleet department is responsible for renewing vehicle registrations and insurance.",
                "Drivers are trained on safe driving practices and company policies.",
                "Cost analyses are conducted to determine the most economical vehicle options.",
                "Environmental impact is considered when selecting new fleet vehicles.",
                "The fleet manager coordinates with suppliers for vehicle procurement and disposal.",
                "Fleet usage data is analyzed to optimize routes and reduce fuel consumption.",
                "Emergency response procedures are established for fleet-related incidents.",
                "Telematics systems are installed in vehicles to monitor driving behavior."
        ));
        examples.put(Category.MEETING, asList(
                "The project kickoff meeting is scheduled for Monday at 10:00 AM.",
                "Meeting minutes will be distributed to all attendees within 24 hours.",
                "Agenda items should be submitted to the meeting organizer by the end of the week.",
                "Regular team meetings are held every Wednesday to discuss project progress.",
                "The meeting room needs to be booked in advance through the company’s scheduling system.",
                "Action items from the last meeting will be reviewed at the beginning of the next session.",
                "Remote team members can join the meeting via the provided video conferencing link.",
                "The annual general meeting will cover key company updates and future plans.",
                "Stakeholder meetings are crucial for aligning project goals with business objectives.",
                "Brainstorming sessions are organized to generate new ideas and solutions.",
                "Meeting agendas should be clear and distributed at least a day before the meeting.",
                "Follow-up meetings are arranged to ensure action items are being addressed.",
                "The chairperson is responsible for keeping the meeting on track and on time.",
                "Feedback from meeting participants is collected to improve future meetings."
        ));
    }

    public void ingest(List<Document> documents) {
        getIngestor().ingest(documents);
    }

    public void ingest(Document document) {
        getIngestor().ingest(document);
    }

    public EmbeddingModelTextClassifier<Category> getClassifier(){
        return new EmbeddingModelTextClassifier<>(embeddingModel, examples);
    }

    private EmbeddingStoreIngestor getIngestor(){
        return EmbeddingStoreIngestor.builder()
                .embeddingModel(embeddingModel)
                .embeddingStore(store)
                .documentSplitter(recursive(500,100))
                .build();
    }

}
