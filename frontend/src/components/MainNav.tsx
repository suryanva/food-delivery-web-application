import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
const MainNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Button
        variant="ghost"
        className="font-bold hover:text-orange-500 hover:bg-white"
        onClick={async () => await loginWithRedirect()}
      >
        Log In
      </Button>
    </div>
  );
};

export default MainNav;
