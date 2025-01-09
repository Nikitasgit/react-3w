import { useDispatch, useSelector } from "react-redux";
import { deleteAllLogs } from "../store/action/action-types";

const Logs = () => {
  const logs = useSelector((state) => state.logReducer.logs);
  const dispatch = useDispatch();
  const handleDeleteButton = () => {
    dispatch(deleteAllLogs());
  };
  return (
    <>
      <ul>
        {logs.length ? (
          logs.map((log) => <p key={log.date}>{log.date}</p>)
        ) : (
          <p>Pas de logs</p>
        )}
      </ul>
      <button onClick={handleDeleteButton}>SUPPRIMER TOUS LES LOGS</button>
    </>
  );
};

export default Logs;
