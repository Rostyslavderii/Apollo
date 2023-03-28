import { useSelector } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
export const value = useSelector(state => state.some.value);
