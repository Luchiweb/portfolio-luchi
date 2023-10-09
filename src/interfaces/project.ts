export interface Project {
  id: number;
  title: string;
  skills: string;
  description: string;
  images: {
    smallImage: string;
    bigImage: string;
  };
  gitHubLink?: string;
  videoLink?: string;
  demoLink?: string;
}
