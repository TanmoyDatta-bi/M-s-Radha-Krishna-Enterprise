
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  imageUrl: string;
}

export interface ClientProject {
  name: string;
  value: string;
}

export interface ToolItem {
  name: string;
  specs?: string;
}

export interface ToolCategory {
  title: string;
  items: ToolItem[];
  icon: string;
}
