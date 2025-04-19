import { FolderNames } from "./enums/FolderNames";
import { FileNames } from "./enums/FileNames";

export const Paths = {
  HOME: "/",
  EXPERIENCE: `/${FolderNames.EXPERIENCE}`,
  EDUCATION: `/${FolderNames.EDUCATION}`,
  SKILLS: `/${FolderNames.SKILLS}`,
  XYZ: `/${FolderNames.EXPERIENCE}/${FileNames.XYZ}`,
  FVR: `/${FolderNames.EXPERIENCE}/${FileNames.FVR}`,
  CMR: `/${FolderNames.EXPERIENCE}/${FileNames.CMR}`,
  UNIVERSITY: `/${FolderNames.EDUCATION}/${FileNames.UNIVERSITY}`,
  COLLEGE: `/${FolderNames.EDUCATION}/${FileNames.COLLEGE}`,
  DEV_SKILLS: `/${FolderNames.SKILLS}/${FileNames.DEV_SKILLS}`,
  SOFT_SKILLS: `/${FolderNames.SKILLS}/${FileNames.SOFT_SKILLS}`,
} as const;
