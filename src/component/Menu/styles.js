import styled from "styled-components";

export const MenuStyle = styled.div`
  div {
    border: 0;
    padding: 0;
    margin: 0;
  }
  header {
    background: ${({ menuScrollPosition }) =>
      menuScrollPosition === undefined
        ? "#14213d"
        : menuScrollPosition <= 100
        ? "transparent"
        : menuScrollPosition > 100 && menuScrollPosition <= 2500
        ? "#14213d"
        : "#1f2229"};
    transition: background-color 250ms linear;
    margin: 0;
    height: 60px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    display: flex;
    @media (max-width: 800px) {
      transition: ${({ showMenuDropdown }) =>
        !showMenuDropdown && " .2s linear .2s"};
      background: ${({ showMenuDropdown }) =>
        showMenuDropdown && "  #040404f2"};
    }
  }
  header menu {
    align-items: center;
    margin: 0;
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 100%;
    @media (max-width: 800px) {
      padding: 0;
      flex-direction: column;
    }
  }
  header menu h1 {
    color: white;
    @media (min-width: 800px) {
      margin-left: 16%;
    }
  }

  /* header ul li *:active {
    outline: none;
  } */
  header ul {
    li {
      color: white;
      background: none;
      min-width: max-content;
      cursor: pointer;
      padding: 5px 10px;
      list-style: none;
      margin: 0 2px;
      font-size: 16px;
      border-radius: 3px;
      overflow: hidden;
      border: none;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      button,
      a {
        background: none;
        padding: 0;
        border: none;
        color: white;
        width: 100%;
        height: 100%;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &:hover {
        button {
          @media (max-width: 800px) {
            color: #14213d;
          }
        }
      }
      @media (max-width: 800px) {
        margin: 10px auto;
        width: 100%;
        border-radius: 5px;
        padding: 10px 0;
      }
      &:hover {
        background: #aa8445;
      }
    }
  }
  header ul {
    display: inline-flex;
    justify-content: center;
    padding: 0;
    text-align: center;
    @media (max-width: 800px) {
      display: grid;
      padding: 0;
      width: 80%;
      margin: auto;
      justify-content: normal;
    }
  }

  @keyframes rollDown {
    0% {
      height: 0px;
      padding-top: 0px;
      padding-bottom: 0px;
      visibility: hidden;
    }

    100% {
      height: 450px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
  @keyframes rollUp {
    0% {
      height: 450px;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    100% {
      height: 0px;
      padding-top: 0;
      padding-bottom: 0px;
      visibility: hidden;
    }
  }

  .linkDiv {
    margin-right: 10%;
    @media (max-width: 800px) {
      background: #040404f2;
      position: absolute;
      border-bottom: 1px solid #fbc56d;
      overflow: hidden;
      display: ${(props) =>
        props.showMenuDropdown === undefined ? "none" : "grid"};
      animation: ${(props) =>
        props.showMenuDropdown
          ? "rollDown .3s  linear forwards "
          : " rollUp .3s  linear forwards"};
      width: 100%;
      right: 0;
      top: 60px;
      margin: 0;
    }
  }

  .navDiv {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 1.4rem;
    }
    @media (max-width: 800px) {
      width: 80vw;
    }
  }
`;
