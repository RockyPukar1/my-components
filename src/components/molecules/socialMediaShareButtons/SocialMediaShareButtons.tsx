import React from 'react';
import Button from '../../atoms/button/Button';
import Icon from '../../atoms/icon/Icon';

type SocialMediaShareButtonsProps = {
  url: string;
}

const SocialMediaShareButtons: React.FC<SocialMediaShareButtonsProps> = ({ url }) => {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${url}`);
  };

  return (
    <div className="naxatw-flex naxatw-items-center naxatw-space-x-2">
      <Button type="button" onClick={shareOnFacebook}>
        <Icon name="facebook" />
      </Button>
      <Button type="button" onClick={shareOnTwitter}>
        <Icon name="twitter" />
      </Button>
    </div>
  );
};

export default SocialMediaShareButtons;
