import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/not-found/NotFound";
import {
  FrameLayout,
  DesktopLayout,
  PDFLayout,
  FolderLayout,
} from "../layouts";
import { BlankFrame } from "../pages/blank-frame/BlankFrame";
import { PortfolioFrame } from "../pages/portfolio-frame/PortfolioFrame";
import {
  ResumePreview,
  ResumePrint,
  ResumeWrapper,
} from "../pages/resume/Resume";
import { WelcomeFrame } from "../pages/welcome-frame/WelcomeFrame";
import { CustomTerminal } from "../pages/custom-terminal/CustomTerminal";
import { CertificatesFrame } from "../pages/certificates-frame/CertificatesFrame";
import { GameFrame } from "../pages/game-frame/GameFrame";
import { CoursesFrame } from "../pages/courses-frame/CoursesFrame";
import { SettingsFrame } from "../pages/settings-frame/SettingsFrame";

export function RoutesList(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DesktopLayout />}>
        <Route index element={<BlankFrame />}></Route>
        <Route path="frame" element={<FrameLayout />}>
          <Route path="readme" element={<WelcomeFrame />} />
          <Route path="settings" element={<SettingsFrame />} />
          <Route path="game" element={<GameFrame />} />
          <Route path="terminal" element={<CustomTerminal />} />
          <Route path="folder" element={<FolderLayout />}>
            <Route path="portfolio" element={<PortfolioFrame />} />
            <Route path="courses" element={<CoursesFrame />} />
            <Route path="certificates" element={<CertificatesFrame />} />
          </Route>
          <Route path="resume" element={<PDFLayout />}>
            <Route index element={<ResumeWrapper />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
      <Route path="/resume" element={<ResumePreview />} />
      <Route path="/print" element={<ResumePrint />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
