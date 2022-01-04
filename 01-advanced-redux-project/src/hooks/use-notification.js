import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "../store/notification";

const useNotification = () => {
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.notification.notification);

  const notify = useCallback(
    (status, title, message) => {
      dispatch(notificationActions.notify({ status, title, message }));
    },
    [dispatch]
  );

  useEffect(() => {
    const timer = setTimeout(
      dispatch.bind(null, notificationActions.clear()),
      2000
    );
    return () => {
      clearTimeout(timer);
    };
  }, [notification, dispatch]);

  return { notification, notify };
};

export default useNotification;
