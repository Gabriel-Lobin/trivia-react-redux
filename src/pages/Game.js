import React from 'react';
import { connect } from 'react-redux';

class Game extends React.Component {
  render() {
    return (
      <div>
        Game Page
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.player.token,
});

export default connect(mapStateToProps, null)(Game);
