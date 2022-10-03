import { FC } from 'react';

import { Dialog, Image } from 'components';
import { Article } from 'models';
import classes from './ArticleDialog.module.scss';

export interface ArticleDialogProps {
  open: boolean;
  closeDialog: VoidFunction;
  article?: Article;
}

export const ArticleDialog: FC<ArticleDialogProps> = ({ open, closeDialog, article }) =>
  !article ? null : (
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
