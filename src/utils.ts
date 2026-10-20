import { getCollection } from 'astro:content';

export const url = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path.startsWith('http') ? path : `${base}${path.startsWith('/') ? '' : '/'}${path}`;
};

export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export async function getNotes() {
  const all = await getCollection('notes', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
export const chapter = (i: number) => roman[i] ?? String(i + 1);

export const statusLabel: Record<string, string> = {
  jam: 'Game jam',
  prototype: 'Prototype',
  student: 'Student project',
  released: 'Released',
  'in-progress': 'In progress',
};
