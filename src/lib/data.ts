import fs from 'fs';
import path from 'path';

import type { Info } from '@/types/info';
import type { Project } from '@/types/project';

const dataDirectory = path.join(process.cwd(), '_data');

export const getInfo = () => {
  const filePath = path.join(dataDirectory, 'info.json');
  const jsonData = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const info = JSON.parse(jsonData) as Info;

  return info;
};

export const getProjects = () => {
  const filePath = path.join(dataDirectory, 'projects.json');
  const jsonData = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const projects = JSON.parse(jsonData) as Project[];

  return projects;
};
