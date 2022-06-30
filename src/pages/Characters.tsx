import React from "react";
import useCharacters from "../hooks/useCharacters";
import { Card, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Continents = () => {
  const { error, loading, data } = useCharacters();

  console.log({ error, loading, data });
  return (
    <>
      <h1 className='title'>GraphQL Rick and Morty</h1>

      {loading ? (
        <Spinner className="spinner" animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      ) : (
        <div className='character-container'>
          {data.characters.results.map((person: any) => {
            return (
              <div key={person.name} className='character-card'>
                <Card style={{ width: "12rem" }}>
                  <Card.Img variant='top' src={person.image} />
                  <Card.Body>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text>{person.species}</Card.Text>
                    <Button variant='primary' href={`character/${person.id}`}>
                      More info
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Continents;
