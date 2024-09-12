import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";
import Squadron from "./Squadron";
import ScheduleManagement from "./ScheduleManagement";
import GenerateEvaluationReport from "./GenerateEvaluationReport";
import MainLayout from "./MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/main"
          element={
            <MainLayout>
              <MainPage />
            </MainLayout>
          }
        />
        <Route
          path="/squadron"
          element={
            <MainLayout>
              <Squadron />
            </MainLayout>
          }
        />
        <Route
          path="/schedule"
          element={
            <MainLayout>
              <ScheduleManagement />
            </MainLayout>
          }
        />
        <Route
          path="/generate-evaluation-report"
          element={
            <MainLayout>
              <GenerateEvaluationReport />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
