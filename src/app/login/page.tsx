import { ViewUser } from "@/Components/login/ViewUser";
import Image from 'next/image'

export default function dashboardLogin() {
    return (
        <section className="h-screen">
            <div className="container h-full px-6 py-24">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="flex justify-center items-start mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <Image
                            src="/image/traveltoLogin.jpg"
                            className="h-[500px]"
                            width={400}
                            height={400}
                            alt="Phone image" />
                    </div>
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <ViewUser />
                    </div>
                </div>
            </div>

        </section>
    )
}