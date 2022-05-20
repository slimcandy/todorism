import { useEffect, useState } from "react";

export interface IShareLink {
  url: string;
  title?: string;
}
export interface IShareLinkProps extends IShareLink {
  className?: string;
}

export const shareUrl = ({ url, title }: IShareLink) =>
  window.navigator.share({ url, title }).then(console.log).catch(console.error);
export const copyUrl = (url: string) =>
  navigator.clipboard.writeText(url).then(console.log).catch(console.error);

const ShareList = ({ title, url, className }: IShareLinkProps) => {
  const [canShare, setCanShare] = useState(false);
  const handleShareUrl = () =>
    shareUrl({
      title,
      url,
    });
  const handleCopyUrl = () => copyUrl(url);

  useEffect(() => {
    window.navigator.canShare &&
      window.navigator.canShare({
        title,
        url,
      }) &&
      setCanShare(true);
  }, [title, url]);

  if (canShare) {
    return (
      <button className={className} onClick={handleShareUrl}>
        ⬆ Share url
      </button>
    );
  }

  return (
    <button className={className} onClick={handleCopyUrl}>
      📄 Copy url
    </button>
  );
};
export default ShareList;
