import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useLocation } from "react-router-dom";
import { FolderNames } from "../utils/enums/FolderNames";
import { FileNames } from "../utils/enums/FileNames";
interface PageContextType {
  currentFolder: FolderNames;
  currentFile: FileNames;
  files: { folder: FolderNames; name: FileNames; pageTitle: string }[];
  setCurrentPath: (folder: FolderNames, file: FileNames) => void;
}

const defaultPageContext: PageContextType = {
  currentFolder: FolderNames.NONE,
  currentFile: FileNames.NONE,
  files: [],
  setCurrentPath: () => {},
};

const PageContext = createContext<PageContextType>(defaultPageContext);

export const usePageContext = () => useContext(PageContext);

export const PageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const [currentFolder, setCurrentFolder] = useState<FolderNames>(
    FolderNames.NONE
  );
  const [currentFile, setCurrentFile] = useState<FileNames>(FileNames.NONE);
  useEffect(() => {
    console.log(`currentFolder: ${currentFolder}`);
    console.log(`currentFile: ${currentFile}`);
  }, [currentFolder, currentFile]);

  useEffect(() => {
    const path = location.pathname;
    console.log(`path: ${path}`);
    switch (true) {
      case path.includes(FolderNames.EXPERIENCE):
        setCurrentFolder(FolderNames.EXPERIENCE);
        break;
      case path.includes(FolderNames.EDUCATION):
        setCurrentFolder(FolderNames.EDUCATION);
        break;
      case path.includes(FolderNames.SKILLS):
        setCurrentFolder(FolderNames.SKILLS);
        break;
      default:
        setCurrentFolder(FolderNames.NONE);
    }

    switch (true) {
      case path.includes(FileNames.XYZ):
        setCurrentFile(FileNames.XYZ);
        break;
      case path.includes(FileNames.FVR):
        setCurrentFile(FileNames.FVR);
        break;
      case path.includes(FileNames.UNIVERSITY):
        setCurrentFile(FileNames.UNIVERSITY);
        break;
      case path.includes(FileNames.DEV_SKILLS):
        setCurrentFile(FileNames.DEV_SKILLS);
        break;
      case path.includes(FileNames.SOFT_SKILLS):
        setCurrentFile(FileNames.SOFT_SKILLS);
        break;
      default:
        setCurrentFile(FileNames.NONE);
    }
  }, [location.pathname]);

  function setCurrentPath(folder: FolderNames, file: FileNames) {
    setCurrentFolder(folder);
    setCurrentFile(file);
  }

  const files = [
    {
      folder: FolderNames.EXPERIENCE,
      name: FileNames.XYZ,
      pageTitle: "XYZ Reality",
    },
    {
      folder: FolderNames.EXPERIENCE,
      name: FileNames.FVR,
      pageTitle: "FundamentalVR",
    },
    {
      folder: FolderNames.EDUCATION,
      name: FileNames.UNIVERSITY,
      pageTitle: "University of Hertfordshire",
    },
    {
      folder: FolderNames.SKILLS,
      name: FileNames.DEV_SKILLS,
      pageTitle: "Dev Skills",
    },
    {
      folder: FolderNames.SKILLS,
      name: FileNames.SOFT_SKILLS,
      pageTitle: "Soft Skills",
    },
  ];

  return (
    <PageContext.Provider
      value={{
        currentFolder,
        currentFile,
        files,
        setCurrentPath,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
