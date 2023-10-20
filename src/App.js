import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense, useEffect, lazy } from "react";
import { loadUser } from "./Features/userFeatures/authSlice";
import { useDispatch } from "react-redux";

import User from "./components/User/User";
import Home from "./components/User/Home/Home";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import FourOFour from "./components/User/layout/FourOFour";
import Loader from "./components/User/layout/Loader";

const Admin = lazy(() => import("./components/Admin/Admin"));
const Dashboard = lazy(() => import("./components/Admin/Dashboard/Dashboard"));
const LoginSignup = lazy(() =>
  import("./components/User/LoginSignup/LoginSignUp")
);
const LoginCard = lazy(() => import("./components/User/LoginSignup/LoginCard"));
const SignupCard = lazy(() =>
  import("./components/User/LoginSignup/SignupCard")
);
const ForgotPassword = lazy(() =>
  import("./components/User/LoginSignup/ForgotPassword")
);
const ResetPassword = lazy(() =>
  import("./components/User/LoginSignup/ResetPassword,")
);
const Profile = lazy(() => import("./components/User/Profile/Profile"));
const About = lazy(() => import("./components/User/About/About"));
const VerifiRequest = lazy(() =>
  import("./components/User/LoginSignup/VerifiRequest")
);
const VerifyAccount = lazy(() =>
  import("./components/User/LoginSignup/VerifyAccount")
);
const Service = lazy(() => import("./components/User/Service/Service"));
const AccountStatus = lazy(() =>
  import("./components/User/LoginSignup/AccountStatus")
);
const UpdateProfile = lazy(() =>
  import("./components/User/Profile/UpdateProfile")
);
const UpdatePassword = lazy(() =>
  import("./components/User/LoginSignup/UpdatePassword")
);
const ContactUs = lazy(() => import("./components/User/ContactUs/ContactUs"));
const MeetingDateTime = lazy(() =>
  import("./components/User/ContactUs/MeetingDateTime")
);
const MeetingDetails = lazy(() =>
  import("./components/User/ContactUs/MeetingDetails")
);
const Meetings = lazy(() => import("./components/Admin/Meetings/Meetings"));
const Works = lazy(() => import("./components/User/Works/Works"));
const IndustriesWeServe = lazy(() =>
  import("./components/User/Industries/IndustriesWeServe")
);
const ProjectDeatils = lazy(() =>
  import("./components/Admin/Projects/ProjectDeatils")
);
const VerifyAndSchedule = lazy(() =>
  import("./components/Admin/Meetings/VerifyAndSchedule")
);
const ClintMeetingDeatils = lazy(() =>
  import("./components/User/Profile/ClintMeetingDeatils")
);
const GetAllQuote = lazy(() =>
  import("./components/Admin/Meetings/GetAllQuote")
);
const Project = lazy(() => import("./components/Admin/Projects/Project"));
const CreateProject = lazy(() =>
  import("./components/Admin/Projects/CreateProject")
);
const UserProjectDetails = lazy(() =>
  import("./components/User/Project/UserProjectDetails")
);
const UpdateProject = lazy(() =>
  import("./components/Admin/Projects/UpdateProject")
);
const AdminUsers = lazy(() => import("./components/Admin/Users/AdminUsers"));
const MobileApp = lazy(() => import("./components/User/Services/MobileApp"));
const WebDevelopment = lazy(() =>
  import("./components/User/Services/WebDevelopment")
);
const BlockchainDev = lazy(() =>
  import("./components/User/Services/BlockchainDev")
);
const EcommerceDev = lazy(() =>
  import("./components/User/Services/EcommerceDev")
);
const CyberSecurity = lazy(() =>
  import("./components/User/Services/CyberSecurity")
);
const AiMl = lazy(() => import("./components/User/Services/AiMl"));
const DigitalMarketing = lazy(() =>
  import("./components/User/Services/DigitalMarketing")
);
const IotEmbedded = lazy(() =>
  import("./components/User/Services/IotEmbedded")
);
const MetaverseDev = lazy(() =>
  import("./components/User/Services/MetaverseDev")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route element={<User />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/service"
            element={
              <Suspense fallback={<Loader />}>
                <Service />
              </Suspense>
            }
          />
          <Route
            path="/works"
            element={
              <Suspense fallback={<Loader />}>
                <Works />
              </Suspense>
            }
          />
          <Route
            path="/industries"
            element={
              <Suspense fallback={<Loader />}>
                <IndustriesWeServe />
              </Suspense>
            }
          />

          {/* Service Routs */}
          <Route
            path="/service/mobile-app-development"
            element={
              <Suspense fallback={<Loader />}>
                <MobileApp />
              </Suspense>
            }
          />
          <Route
            path="/service/web-development"
            element={
              <Suspense fallback={<Loader />}>
                <WebDevelopment />
              </Suspense>
            }
          />
          <Route
            path="/service/blockchain-development"
            element={
              <Suspense fallback={<Loader />}>
                <BlockchainDev />
              </Suspense>
            }
          />
          <Route
            path="/service/ecommerce-development"
            element={
              <Suspense fallback={<Loader />}>
                <EcommerceDev />
              </Suspense>
            }
          />
          <Route
            path="/service/cyber-security"
            element={
              <Suspense fallback={<Loader />}>
                <CyberSecurity />
              </Suspense>
            }
          />
          <Route
            path="/service/artificial-intelligence-and-machine-learning"
            element={
              <Suspense fallback={<Loader />}>
                <AiMl />
              </Suspense>
            }
          />
          <Route
            path="/service/digital-marketing"
            element={
              <Suspense fallback={<Loader />}>
                <DigitalMarketing />
              </Suspense>
            }
          />
          <Route
            path="/service/iot-development"
            element={
              <Suspense fallback={<Loader />}>
                <IotEmbedded />
              </Suspense>
            }
          />
          <Route
            path="/service/metaverse-development"
            element={
              <Suspense fallback={<Loader />}>
                <MetaverseDev />
              </Suspense>
            }
          />

          <Route path="*" element={<FourOFour />} />

          <Route
            path="/meeting/details/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ClintMeetingDeatils />
              </Suspense>
            }
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <ContactUs />
              </Suspense>
            }
          >
            <Route
              path="/contactus/meeting/timedate"
              element={
                <Suspense fallback={<Loader />}>
                  <MeetingDateTime />
                </Suspense>
              }
            />
            <Route
              path="/contactus/meeting/details"
              element={
                <Suspense fallback={<Loader />}>
                  <MeetingDetails />
                </Suspense>
              }
            />
          </Route>

          <Route
            element={
              <Suspense fallback={<Loader />}>
                <LoginSignup />
              </Suspense>
            }
          >
            <Route
              path="/login"
              element={
                <Suspense fallback={<Loader />}>
                  <LoginCard />
                </Suspense>
              }
            />
            <Route
              path="/signup"
              element={
                <Suspense fallback={<Loader />}>
                  <SignupCard />
                </Suspense>
              }
            />
            <Route
              path="/password/forgot"
              element={
                <Suspense fallback={<Loader />}>
                  <ForgotPassword />
                </Suspense>
              }
            />
            <Route
              path="/password/reset/:token"
              element={
                <Suspense fallback={<Loader />}>
                  <ResetPassword />
                </Suspense>
              }
            />
          </Route>

          {/* --------//ProtectedRoute//----------- */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/account"
              element={
                <Suspense fallback={<Loader />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path="/account/verifirequest"
              element={
                <Suspense fallback={<Loader />}>
                  <VerifiRequest />
                </Suspense>
              }
            />
            <Route
              path="/account/verify/:token"
              element={
                <Suspense fallback={<Loader />}>
                  <VerifyAccount />
                </Suspense>
              }
            />
            <Route
              path="/account/status"
              element={
                <Suspense fallback={<Loader />}>
                  <AccountStatus />
                </Suspense>
              }
            />
            <Route
              path="/account/update"
              element={
                <Suspense fallback={<Loader />}>
                  <UpdateProfile />
                </Suspense>
              }
            />
            <Route
              path="/password/update"
              element={
                <Suspense fallback={<Loader />}>
                  <UpdatePassword />
                </Suspense>
              }
            />
            <Route
              path="/project/details/:id"
              element={<UserProjectDetails />}
            />
            ;
          </Route>
        </Route>

        {/*--------------- //ADMIN ROUTS// -----------*/}
        <Route element={<ProtectedRoute isAdmin={true} />}>
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <Admin />
              </Suspense>
            }
          >
            <Route
              path="/admin"
              element={<Navigate to="/admin/dashboard" replace />}
            />
            <Route
              path="/admin/dashboard"
              element={
                <Suspense fallback={<Loader />}>
                  <Dashboard />
                </Suspense>
              }
            />
            ;
            <Route
              path="/admin/meetings"
              element={
                <Suspense fallback={<Loader />}>
                  <Meetings />
                </Suspense>
              }
            />
            ;
            <Route
              path="/admin/meeting/verify/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <VerifyAndSchedule />
                </Suspense>
              }
            />
            ;
            <Route
              path="/admin/quotes"
              element={
                <Suspense fallback={<Loader />}>
                  <GetAllQuote />
                </Suspense>
              }
            />
            ;
            <Route
              path="/admin/projects"
              element={
                <Suspense fallback={<Loader />}>
                  <Project />
                </Suspense>
              }
            />
            ;
            <Route
              path="/admin/project/create"
              element={
                <Suspense fallback={<Loader />}>
                  <CreateProject />
                </Suspense>
              }
            />
            ;
            <Route
              path="/admin/project/details/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <ProjectDeatils />
                </Suspense>
              }
            />
            ;
            <Route
              path="/admin/project/update/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <UpdateProject />
                </Suspense>
              }
            />
            ;
            <Route
              path="/admin/users"
              element={
                <Suspense fallback={<Loader />}>
                  <AdminUsers />
                </Suspense>
              }
            />
            ;
            <Route path="/admin/*" element={<FourOFour />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
