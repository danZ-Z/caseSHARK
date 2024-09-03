import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import UploadPhoto from "@/components/UploadPhoto";


const Page = () => {
  return (
    <div className="flex justify-center px-2.5 grainy-light">
      <MaxWidthWrapper>
          <Steps/>
      <div className="border ring-1 ring-gray-900/50 rounded-2xl max-w-screen-xl my-20">
        <div className="flex ">
          <UploadPhoto/>
        </div>
      </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Page
