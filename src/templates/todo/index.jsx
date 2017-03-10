import React, { Component } from 'react';

import Title from '../../containers/title';
import Filter from '../../components/filter';
import ListContainer from '../../containers/list';
import Item from '../../containers/item';
import TreeContainer from '../../containers/tree';
import {DirectoryContainer, DirectoryWithIconContainer} from '../../containers/directory';
import ProgressBar from '../../containers/progress_bar';
import ViewItem from '../../containers/view_item';
import WindowContainer from '../../containers/window';

export default class Todo extends Component {
  directories() {
    const fixedDirectories = [
      { icon: 'flash_on', text: 'incompleted' },
      { icon: 'star', text: 'starred' },
      { icon: 'flash_off', text: 'completed' },
    ];

    return fixedDirectories.map((dir, i) =>
      <DirectoryWithIconContainer key={i} id={dir.text} icon={<i className={'material-icons'}>{dir.icon}</i>} text={dir.text} />
    )
  }

  renderDirectory(dir) {
    return (
      <DirectoryContainer key={dir.id} {...dir}>
        <span>{dir.name}</span>
      </DirectoryContainer>
    )
  }

  renderItem(item) {
    return (
      <Item key={item.id} {...item}/>
    )
  }

  render() {
    return (
      <div className="todo__app">
        <Title title="My title" filter={<Filter/>} content={<ProgressBar/>}/>
        <div className="todo__content">
          <div className="todo__dir-tree">
            <TreeContainer fixedDirectories={this.directories()} renderDirectory={this.renderDirectory}/>
          </div>
          <div className="todo__items-list">
            <WindowContainer
              list={<ListContainer renderItem={this.renderItem}/>}
              view_item={<ViewItem />}
              />
          </div>
        </div>
      </div>
    )
  }
}
