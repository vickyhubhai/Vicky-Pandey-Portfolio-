import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="flex flex-col gap-10 max-w-[80%] w-full">
        {/* All Skills */}
        <div className="flex flex-col gap-4">
          <div className="text-[#b49bff] font-bold text-[19px]">All Skills</div>
          <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
            {SKILL_DATA.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Frontend Skills */}
        <div className="flex flex-col gap-4">
          <div className="text-[#b49bff] font-bold text-[19px]">Frontend</div>
          <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
            {FRONTEND_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="flex flex-col gap-4">
          <div className="text-[#b49bff] font-bold text-[19px]">Backend</div>
          <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
            {BACKEND_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Fullstack Skills */}
        {FULLSTACK_SKILL.length > 0 && (
          <div className="flex flex-col gap-4">
            <div className="text-[#b49bff] font-bold text-[19px]">Fullstack</div>
            <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
              {FULLSTACK_SKILL.map((skill, i) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  src={skill.image}
                  name={skill.skill_name}
                  width={skill.width}
                  height={skill.height}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Skills */}
        {OTHER_SKILL.length > 0 && (
          <div className="flex flex-col gap-4">
            <div className="text-[#b49bff] font-bold text-[19px]">Other</div>
            <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
              {OTHER_SKILL.map((skill, i) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  src={skill.image}
                  name={skill.skill_name}
                  width={skill.width}
                  height={skill.height}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
