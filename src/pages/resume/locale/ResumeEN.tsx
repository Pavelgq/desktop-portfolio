import cn from "classnames";
import { HTag, HrTag, ImgTag, WorkPlaceItem } from "../../../components";
import { getAge } from "../../../utils/calc-utils";
import { SkillList } from "../components/SkillList/SkillList";
import styles from "../Resume.module.css";

export const ResumeEN = () => {
  return (
    <>
      <div className={styles.title}>
        <HTag tag="h2">Gordeev Pavel</HTag>
        <HrTag thickness="medium" className={styles.line} />
        <span>FRONTEND DEVELOPER</span>
      </div>
      <div className={styles.mainInfo}>
        <ImgTag
          width={160}
          height={262}
          className={styles.avatar}
          src="/img/avatar-min.jpg"
          alt="Photo of the author"
        />
        <div>
          <ul className={styles.noPointList}>
            <li className={styles.item}>
              <span className={styles.itemCategory}>Location: </span>
              <span className={styles.itemValue}>Georgia, Tbilisi</span>
            </li>
            {/* <li className={styles.item}>
              <span className={styles.itemCategory}>Метро: </span>
              <span className={styles.itemValue}>Лесная</span>
            </li> */}
            <li className={styles.item}>
              <span className={styles.itemCategory}>Date of birth: </span>
              <span className={styles.itemValue}>
                06.12.1991 ({getAge(new Date(1991, 12, 6))})
              </span>
            </li>
          </ul>
          <div>
            <HTag tag="h3" id={"skils"} className={styles.title}>
              Skills
            </HTag>
            <SkillList className={styles.list} />
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <HTag tag="h3" id={"about"} className={styles.title}>
          About
        </HTag>
        <p className={cn("paragraph", styles.paragraph)}>
          Front-end developer with an automation engineer background. I want to
          find a job in a growing IT company and I'm aimed at long-term
          cooperation, but I also consider project work.
        </p>
        <p className={cn("paragraph", styles.paragraph)}>
          During my career I have acquired useful skills:
        </p>
        <ul className={styles.list}>
          <li>as an engineer, to find a solution for any problem,</li>
          <li>take project architecture seriously,</li>
          <li>work in a team,</li>
          <li>think a few steps ahead and be attentive to details,</li>
          <li>
            organize your working time rationally, take responsibility for your
            decisions,
          </li>
          <li>manage several projects in parallel.</li>
        </ul>
      </div>
      <div>
        <HTag tag="h3" id={"experience"} className={styles.title}>
          Experience
        </HTag>
        <ul className={styles.noPointList}>
          <WorkPlaceItem
            place={"JSC “ZEU”, Russia, Saint-Petersburg"}
            role={"Full stack developer"}
            interval={"AUGUST 2021 – SEPTEMBER 2022"}
            info={
              <>
                Moved to the automation department as a full stack developer
                <ul>
                  <li>
                    Developed interfaces for maintaining electronic journals at
                    production sites
                  </li>
                  <li>
                    Developed interfaces for test benches, machine tools and
                    other equipment
                  </li>
                  <li>
                    Developed software for collecting data from production lines
                    and saving them to a database
                  </li>
                  <li>
                    Developed interfaces for working with data (viewing and
                    analyzing reports from sites, product data, etc.)
                  </li>
                  <li>Developed Rest API for interacting with the database</li>
                </ul>
              </>
            }
          />
          <WorkPlaceItem
            place={"JSC “ZEU”, Russia, Saint-Petersburg"}
            role={"software engineer"}
            interval={"SEPTEMBER 2015 – AUGUST 2021"}
            info={
              <>
                <ul>
                  <li>
                    Developed automation lines for specific production processes
                  </li>
                  <li>Studied and configured industrial equipment</li>
                  <li>
                    Programmed controllers (mainly in IEC languages 61131-3),
                    robotic units, CNC machines and more
                  </li>
                  <li>
                    Corrected someone else's code, added functionality to
                    equipment purchased from third parties
                  </li>
                  <li>
                    Designed and corrected documentation, drawings, diagrams, 3d
                    models
                  </li>
                  <li>Trained staff</li>
                </ul>
              </>
            }
          />
          <WorkPlaceItem
            place={`Freelance project "TEK Admin and TEK Server"`}
            role={"Full stack developer"}
            interval={"NOVEMBER 2021 – JUNE 2022"}
            info={
              <>
                Client: React, Redux(Saga), TypeScript, Material UI <br />
                Server: Express JS, Postgresql
                <ul>
                  <li>
                    Designed and wrote a simple server with REST API on Express
                    Js (entities: employee, client, customer actions,
                    applications, Access keys)
                  </li>
                  <li>
                    Developed a program for administration (creation users,
                    generating access keys to the service, creation new
                    employees, analysis of applications for the use of programs,
                    as well as viewing, analyzing and uploading data generated
                    by Users)
                  </li>
                  <li>
                    Made refactoring of calculation programs with the addition
                    of keys access, the ability to send requests for a key and
                    storing user actions in the database
                  </li>
                </ul>
              </>
            }
          />
          <WorkPlaceItem
            place={`Freelance project "Speach-Therapy"`}
            role={"Frontend developer"}
            interval={"SEPTEMBER 2020 – JANUARY 2021"}
            info={
              <>
                Speech therapist app for correcting dyslexia in children.
                Consists from the teacher's personal account, student's account,
                server and applications with game mechanics.
                <ul>
                  <li>User authorization with server generated JWT token</li>
                  <li>
                    Five types of tasks collected from input data from the
                    server
                  </li>
                  <li>
                    Generating tasks in a game view on Canvas / WebGL using
                    Pixi.js libraries
                  </li>
                  <li>Client Job Builder</li>
                  <li>Collecting performance statistics</li>
                </ul>
              </>
            }
          />
          <WorkPlaceItem
            place={`Freelance project "TEK Calculators"`}
            role={"frontend developer"}
            interval={"DESEMBER 2018 – OCTOBER 2019"}
            info={
              <>
                Together with a candidate of technical sciences, he wrote a
                series of calculated programs for solving problems related to
                calculations at designing cable lines. Calculation of screens,
                calculation of pipes for Cable gaskets and calculation of the
                cable itself.
                <ul>
                  <li>Used jQuery and ES5</li>
                  <li>
                    Dynamic form, number of cable lines can be added and they
                    can be different in parameters
                  </li>
                  <li>
                    The calculation can be saved in a file and downloaded back
                    to program
                  </li>
                </ul>
              </>
            }
          />
        </ul>
      </div>
      <div>
        <HTag tag="h3" id={"education"} className={styles.title}>
          Education
        </HTag>
        <ul className={styles.placeList}>
          <WorkPlaceItem
            place={
              "St. Petersburg National Research University ITMO (Information Technology, Mechanics and Optics), Russia, Saint-Petersburg"
            }
            role={"bachelor"}
            interval={"SEPTEMBER 2011 – JUNE 2015"}
            info={<></>}
          />
        </ul>
      </div>
      <div>
        <HTag tag="h3" id={"courses"} className={styles.title}>
          Education
        </HTag>
        <ul className={styles.placeList}>
          <WorkPlaceItem
            place={`HTML Academy`}
            role={"HTML и CSS. Professional website layout"}
            interval={"Completed: FEBRUARY 2020"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`HTML Academy`}
            role={"HTML и CSS. Responsive layout and automation"}
            interval={"Completed: APRIL 2020"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`Loftschool`}
            role={"Comprehensive training JavaScript"}
            interval={"Completed: JUNE 2020"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`HTML Academy`}
            role={"Node.js. Application server and API development"}
            interval={"Completed: SEPTEMBER 2020"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`UDEMY`}
            role={"React + Redux - Professional Development"}
            interval={"Completed: MARCH 2021"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`UDEMY`}
            role={
              "React + Next.js - from scratch. TypeScript, Hooks, SSR и CSS Grid"
            }
            interval={"Completed: NOVEMBER 2021"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`Hexlet`}
            role={"JS: Redux (React)"}
            interval={"Completed: NOVEMBER 2021"}
            info={<></>}
          />
          <WorkPlaceItem
            place={`Yandex School of Interface Development`}
            role={"Frontend developer"}
            interval={"Completed: SEPTEMBER 2022"}
            info={<></>}
          />
        </ul>
      </div>
      <div>
        <HTag tag="h3" id={"additionally"} className={styles.title}>
          Other
        </HTag>
        <ul className={styles.list}>
          <li>Married and have two cats</li>
          <li>English Pre-Intermediate (In studying process)</li>
          <li>Driving license category B</li>
        </ul>
      </div>
    </>
  );
};
