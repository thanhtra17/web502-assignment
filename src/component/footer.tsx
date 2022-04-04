import React from "react";

type Prop = {}

const Footer = (prop: Prop) => {
    return (
        <footer>
            <div className="container-fluid bg-dark w-100 ">
                <div className="row align-items-center ">
                    <div className="col-sm-4">
                            <h3 className="text-white text-center">Địa chỉ</h3>
                            <div className="text-center">
                                    <p className="text-white">HANOI: 360 Phố Huế- 15 Hồ Đắc Di</p>
                                    <p className="text-white">SAIGON: đối diện 90 Lê Lai, quận 1</p>
                            </div>
                            
                    </div>
                    <div className="col-sm-4">
                            <h3 className="text-white text-center">Điện thoại</h3>
                            <div className="text-center">
                            <p className="text-white">0985 032 589</p>
                            </div>
                            
                    </div>
                    <div className="col-sm-4">
                        <h3 className="text-white text-center">Email</h3>
                        <div className="text-center">
                        <p className="text-white">info@goldievietnam.com</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </footer>
    )
}
export default Footer