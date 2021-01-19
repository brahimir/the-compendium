export class Session {
  chapter: string;
  episode: string;
  date: string;
  content: string;

  constructor(
    chapter: string,
    episode: string,
    date: string,
    content: string
  ) {
    this.chapter = chapter;
    this.episode = episode;
    this.date = date;
    this.content = content;
  }
}
