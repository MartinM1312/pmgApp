interface MobileImageOrVideo {
  contentType: string;
  url: string;
}
export interface SlidesData {
  title: string;
  eyeBrowText: string;
  targetUrl: string | null;
  enableDarkBackdrop: boolean;
  eyebrowImage: object;
  mobileImageOrVideo: MobileImageOrVideo | null;
}
