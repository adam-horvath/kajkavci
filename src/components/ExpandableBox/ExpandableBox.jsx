import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import { useExpandableBoyStyles } from './styles';

export const ExpandableBox = ({ text, minHeight }) => {
  const classes = useExpandableBoyStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [height, setHeight] = React.useState(minHeight);

  useEffect(() => {
    setHeight(document.getElementById('Box').scrollHeight + 32);
  });

  return (
    <div className={classes.Wrapper}>
      <Box
        id="Box"
        className={classNames(classes.Text, { Expanded: expanded })}
        style={{ maxHeight: expanded ? height : minHeight }}
      >
        {text}
        <Box className={classNames(classes.ShadowBox, { Expanded: expanded })} />
      </Box>
      <div className={classNames(classes.Expander, { Expanded: expanded })} onClick={() => setExpanded(!expanded)}>
        <SvgIcon viewBox={`0 0 ${expanded ? '20.617 9.309' : '16.617 12.309'}`}>
          <path d="M0,0,8.894,8.894,17.789,0" />
        </SvgIcon>
      </div>
    </div>
  );
};
