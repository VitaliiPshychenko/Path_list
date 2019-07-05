import React, { Component } from 'react';
import './App.css';
import { NewPathForm } from './components/NewPathForm';
import { Container, Col, Button, Navbar, Form, Row, Tab } from 'react-bootstrap';
import { PathItem } from './components/PathItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {title: "1", short: "2", full: "3"},
        {title: "Shop", short: "path to shop", full: "path to absolute"},
        {title: "home", short: "path to home", full: "path to Sahunivka"}
      ],
      showForm: false,
      query: '',
      selectedIndex: null,
      elected: false
    };
  };

  onTitleChange = (event) => {
    this.setState({
      pathName: event.target.value
    });
  };

  onShortDescChange = (event) => {
    this.setState({
      shortDescription: event.target.value
    });
  };
  
  onFullDescChange = (event) => {
    this.setState({
      fullDescription: event.target.value
    });
  };
 
  addPathToList = (title, short, full) => {  
     this.setState(({ data }) => {
      const newData = [
        ...data,
        {
          title: title,
          short: short,
          full: full
        }
      ];

      return {
        data: newData
      }
    })
    
    this.toggleForm();
  };

  toggleForm = () => {
    this.setState((prevState) => {
      return {
        showForm: !prevState.showForm
      };
    });
  };

  search = (items, query) => {
    if (query.length === 0) {
      return items;
    } else {
      return items.filter(item => {
        return item.title.includes(query) || item.full.includes(query);
      });
    }
  };

  onSearchChange = (event) => {
    this.setState({
      query: event.target.value
    });
  };

  selectItem = (event, index) => {
    event.preventDefault();
    this.setState({
      selectedIndex: index
    });
  };

  removeItem = (event) => {
    event.preventDefault();
    const { data, selectedIndex } = this.state;
    const newData = [...data.slice(0, selectedIndex), ...data.slice(selectedIndex + 1)];

    this.setState({
      data: newData,
      selectedIndex: null
    });
  };

  render() {
    const {
      data,
      showForm,
      query
    } = this.state;
    
    const filteredItems = this.search(data, query)

    return (
      <Container>
        <Navbar className="d-flex justify-content-between header">
          <Navbar.Brand href="#home">Saunter</Navbar.Brand>
          <Button onClick={this.toggleForm} disabled={showForm ? true : false}>Add path</Button>
        </Navbar>

        {showForm 
          ? <NewPathForm
              addPathToList={this.addPathToList}
              toggleForm={this.toggleForm}
            />
          : null
        }

        <Tab.Container id="list-group-tabs-example">
          <Container className="main-container">
            <Row>
              <Col xs={6} className="search">
                <Form.Control type="text" placeholder="Search..." className="pr-5" value={query} onChange={this.onSearchChange}/>
              </Col>
            </Row> 
            {filteredItems.map((item, index) => {
                return (
                  <PathItem
                    key={item.title}
                    selectItem={this.selectItem}
                    removeItem={this.removeItem}
                    changeElected={this.changeElected}
                    elected={this.state.elected}
                    index={index}
                    title={item.title}
                    shortDesc={item.short}
                    fullDesc={item.full}
                  />
                )      
              })}
          </Container>
        </Tab.Container>      
      </Container>        
    );
  };
}

export default App;
