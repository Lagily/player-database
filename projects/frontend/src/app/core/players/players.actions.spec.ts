import { fetchPlayers, setPlayers } from "./players.action";

describe("Player Actions", () => {
  it("should create PlayerFetch action", () => {
    const action = fetchPlayers();
    expect(action.type).toEqual("[Players] Fetch");
  });

  it("should create PlayerSet action", () => {
    const action = setPlayers({players: []});
    expect(action.type).toEqual("[Players] Set");
    expect(action.players.length).toEqual(0);
  });
});
