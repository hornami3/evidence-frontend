export interface AstronautData {
  firstName: string,
  lastName: string,
  superpower: string,
  dateOfBirth: string,
};

export interface Astronaut extends AstronautData {
  id: string,
};

export interface httpAstronaut extends AstronautData {
  _id: string
}