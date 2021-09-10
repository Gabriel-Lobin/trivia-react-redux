import React from 'react';
import { ImGithub } from 'react-icons/im';
import PropTypes from 'prop-types';
import { githubGroup9, githubNames } from '../../utils/Githubs';

class Github extends React.Component {
  constructor() {
    super();
    this.state = {
      githubAtual: 0,
    };
  }

  componentDidMount() {
    const CHANGE_GITHUB_TIME = 3500;
    const { history: { location } } = this.props;
    const setName = setInterval(() => {
      const { githubAtual } = this.state;
      if (location.pathname !== '/') {
        clearInterval(setName);
      } if (githubAtual >= githubNames.length - 1) {
        this.setState({
          githubAtual: 0,
        });
      } else {
        this.setState((state) => ({
          githubAtual: state.githubAtual + 1,
        }));
      }
    }, CHANGE_GITHUB_TIME);
  }

  render() {
    const { githubAtual } = this.state;
    return (
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="github"
        href={ githubGroup9[githubNames[githubAtual]].link }
        alt="github"
      >
        <ImGithub />
        <h4 className="github-name">{ githubGroup9[githubNames[githubAtual]].name }</h4>
      </a>
    );
  }
}

Github.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Github;
