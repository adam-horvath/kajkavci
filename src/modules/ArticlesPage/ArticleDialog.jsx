import React from 'react';
import PropTypes from 'prop-types';

import { Dialog } from 'components';
import { useArticleDialogStyles } from './styles';
import Image from 'components/Image/Image';

const ArticleDialog = ({ open, closeDialog, article }) => {
  const classes = useArticleDialogStyles();
  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      maxWidth={'lg'}
      title={article.title}
      content={
        <div className={classes.ArticleImageWrapper}>
          <Image className={classes.ArticleImage} src={article.article} />
        </div>
      }
    />
  );
};

ArticleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleDialog;
