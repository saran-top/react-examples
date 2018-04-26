import React from 'react';
import Typography from 'material-ui/Typography';

const year = new Date().getFullYear();

export default () => {
  return (
    <React.Fragment>
      <hr />
      <Typography variant="caption" gutterBottom align="center">
        Copyright {year}
      </Typography>
    </React.Fragment>
  );
};
