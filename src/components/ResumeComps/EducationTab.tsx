import { educationDetails } from "@/lib/information";

const EducationTab = () => {
  return (
    <>
      <div className="text-4xl font-bold text-default-pink dark:text-foreground">
        My Education
      </div>

      <div className="mt-4 text-foreground/50">
        I am currently syudying B.Tech CSE from Techno India University.My main
        focus is the front end development and UI/UX Designing to create
        innovative and responsive websites.
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {educationDetails.map((educationDetail) => {
          return (
            <div
              className="rounded-lg bg-foreground/5 px-3 py-6 text-center"
              key={educationDetail.id}
            >
              <div className="font-bold text-default-pink">
                {educationDetail.year}
              </div>
              <div className="text-xl font-bold">
                {educationDetail.boardName}
              </div>
              <div className="text-foreground/80">{educationDetail.degree}</div>
              <div className="text-foreground/50">
                <div className="">{educationDetail.subject}</div>
              </div>
              <div className="text-foreground/50">
                Obtain Percentage: {educationDetail.marks}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EducationTab;
