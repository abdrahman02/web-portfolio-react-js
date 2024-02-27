import { useState, useEffect } from "react";

const useVisibleSection = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const experiencesSection = document.getElementById("experiences");
      const certificatesSection = document.getElementById("certificates");
      const skillsSection = document.getElementById("skills");
      
      const scrollTop = window.pageYOffSet || document.documentElement.scrollTop;

      if (scrollTop >= experiencesSection.offsetTop && scrollTop < certificatesSection.offsetTop) {
        setVisibleSection("experiences");
      } else if (scrollTop >= certificatesSection.offsetTop && scrollTop < skillsSection.offsetTop) {
        setVisibleSection("certificates");
      } else if (scrollTop >= skillsSection.offsetTop) {
        setVisibleSection("skills");
      } else {
        setVisibleSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visibleSection;
};

export default useVisibleSection;
