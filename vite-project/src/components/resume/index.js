import React from 'react';
import {Row, Col} from 'react-bootstrap';

function resume() {
    return (
        <section>
            <h1>Resume</h1>
            <Row>
                <Col>
                    <h2>Front-End Proficiencies</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </Col>
                <Col>
                    <h2>Back-End Proficiencies</h2>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </Col>
            </Row>
        </section>
    );
}

export default resume;