export interface NavItem {
  name: string;
  path: string;
  subItems?: NavItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  color: string;
}
