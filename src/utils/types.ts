export type Post = {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
    author: {
      id: number;
      name: string;
    };
    category: {
      id: number;
      name: string;
      icon: string;
    };
    series: {
      id: number;
      name: string;
    };
    createdAt: string;
};

export type Category = {
    id: number;
    name: string;
    icon: string;
  };