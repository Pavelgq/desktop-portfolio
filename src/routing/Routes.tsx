import { Routes, Route, useLocation } from "react-router-dom";
import { NotFound } from "../pages/not-found/NotFound";
import {
  FrameLayout,
  DesktopLayout,
  PDFLayout,
  FolderLayout,
} from "../layouts";
import { BlankFrame } from "../pages/blank-frame/BlankFrame";
import { PortfolioFrame } from "../pages/portfolio-frame/PortfolioFrame";
import { ResumePreview, ResumeWrapper } from "../pages/resume/Resume";
import { WelcomeFrame } from "../pages/welcome-frame/WelcomeFrame";
import { CoursesFrame } from "../pages/courses-frame/CoursesFrame";

export function RoutesList(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DesktopLayout />}>
        <Route index element={<BlankFrame />}></Route>
        <Route path="frame" element={<FrameLayout />}>
          <Route path="welcome" element={<WelcomeFrame />} />
          <Route path="folder" element={<FolderLayout />}>
            <Route path="portfolio" element={<PortfolioFrame />} />
            <Route path="courses" element={<CoursesFrame />} />
          </Route>
          <Route path="resume" element={<PDFLayout />}>
            <Route index element={<ResumeWrapper />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
      <Route path="/resume-print" element={<ResumePreview />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
