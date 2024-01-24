import MainGridItem from "../MainGridItem";
import SecondaryButton from "../SecondaryButton";
import IntroIcons from "./IntroIcons";

const ProjectsIntro = () => {
  return (
    <MainGridItem width={4} height={1} className="bg-neutral-950">
      <IntroIcons />
      <div className="font-light lg:text-2xl text-justify">
        My approach to all technical projects is to learn along the way, and use
        tutorials and other such resources as a guide, not as a to-do list. This
        makes sure that I explore the inticacies of languages, frameworks, and
        libraries on my own rather than taking the easy way out. I also like to
        have my applications deployed and made available to the public (although
        often due to debugging or upgrades they may be offline, with the code
        always available on GitHub), so that I can get feedback from people who
        use them. For more insights into my work, check out my{" "}
        <SecondaryButton plain variant="violet" href="/blog">
          engineering blog
        </SecondaryButton>
        .
      </div>
    </MainGridItem>
  );
};

export default ProjectsIntro;
