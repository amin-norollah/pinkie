export interface IFullContents {
  id: number;
  authorId: number;
  authorName: string;
  authorPhoto: string;
  location: string;
  likes: number;
  comments: number;
  description: string;
  photo: string;
  tags: string[];
}

export interface IListContents {
  id: number;
  likes: number;
  comments: number;
  photo: string;
}
