import { FolderNames } from "./enums/FolderNames";
import { FileNames } from "./enums/FileNames";

export const Paths = {
  HOME: "/",
  EDUCATION: `/${FolderNames.EDUCATION}`,
  SKILLS: `/${FolderNames.SKILLS}`,
  XYZ: `/${FolderNames.EDUCATION}/${FileNames.XYZ}`,
  FVR: `/${FolderNames.EDUCATION}/${FileNames.FVR}`,
  CMR: `/${FolderNames.EDUCATION}/${FileNames.CMR}`,
  UNIVERSITY: `/${FolderNames.EDUCATION}/${FileNames.UNIVERSITY}`,
  COLLEGE: `/${FolderNames.EDUCATION}/${FileNames.COLLEGE}`,
  DEV_SKILLS: `/${FolderNames.SKILLS}/${FileNames.DEV_SKILLS}`,
  SOFT_SKILLS: `/${FolderNames.SKILLS}/${FileNames.SOFT_SKILLS}`,
} as const;
