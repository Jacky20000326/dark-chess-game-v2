import * as ChessInfo from './ChessStore'
export const initChessInfo = () => {
    let ConcreteChessList = new ChessInfo.ChessList();

    let ConcreteSoldierChessInfo = new ChessInfo.SoldierChessInfo();
    let ConcreteKingChessInfo = new ChessInfo.KingChessInfo();
    let ConcreteElephantChessInfo = new ChessInfo.ElephantChessInfo();
    let ConcreteCarChessInfo = new ChessInfo.CarChessInfo();
    let ConcreteHorseChessInfo = new ChessInfo.HorseChessInfo();
    let ConcreteCannonChessInfo = new ChessInfo.CannonChessInfo();
    let ConcretePawnChessInfo = new ChessInfo.PawnChessInfo();


    ConcreteChessList.AddChessToList(ConcreteSoldierChessInfo);
    ConcreteChessList.AddChessToList(ConcreteKingChessInfo);

    ConcreteChessList.AddChessToList(ConcreteElephantChessInfo);
    ConcreteChessList.AddChessToList(ConcreteCarChessInfo);

    ConcreteChessList.AddChessToList(ConcreteHorseChessInfo);
    ConcreteChessList.AddChessToList(ConcreteCannonChessInfo);

    ConcreteChessList.AddChessToList(ConcretePawnChessInfo);


    // shuffle
    ConcreteChessList.ShuffleArray()


    return  ConcreteChessList.List
};