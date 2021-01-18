export class Session {
  titleChapter: string;
  titleEpisode: string;
  date: string;
  content: string;

  constructor(
    title: string,
    titleEpisode: string,
    date: string,
    content: string
  ) {
    this.titleChapter = title;
    this.titleEpisode = titleEpisode;
    this.date = date;
    this.content = content;
  }
}
