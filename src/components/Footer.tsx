import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () =>
{
    return (
        <footer>
            <MaxWidthWrapper>
                <div className="flex flex-col gap-4 pt-2 md:pt-0 items-center md:flex-row bg-white border-t md:justify-between border-gray-200 h-20">
                    <div className="flex items-center justify-between">
                        <p className="text-md text-muted-foreground">
                        &copy; {new Date().getFullYear()} CaseShark, All rights reserved.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex space-x-8">
                        <Link
                            href='/'
                            className='text-sm text-muted-foreground hover:text-gray-600'>
                            Terms
                        </Link>
                        <Link
                            href='/'
                            className='text-sm text-muted-foreground hover:text-gray-600'>
                            Privacy Policy
                        </Link>
                        <Link
                            href='/'
                            className='text-sm text-muted-foreground hover:text-gray-600'>
                            Cookie Policy
                        </Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
}

export default Footer