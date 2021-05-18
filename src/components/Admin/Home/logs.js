import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import "../../../assets/scss/admin.scss"
import { getAdminLogs } from "../../../services/admin_logs"
import { MdMenu, MdDateRange } from "react-icons/md"
import AdminSidebar from "../Sidebar/admin_sidebar"
import qrHome from "../../../assets/images/qr_home.PNG"

const AdminUserLogs = ({ logged, username }) => {
    const [showMenu, setShowMenu] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 767) {
                setShowMenu(true)
            } else {
                setShowMenu(false)
            }
        }

        window.addEventListener("resize", handleResize)
    })

    return logged ? (
        <>
            <AdminSidebar
                username={username}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            <div className="admin-wrapper d-flex">
                <div
                    className={`admin-content ${
                        showMenu ? "admin-narrow" : ""
                    } admin-logs`}
                >
                    <div className="container-fluid pt-2">
                        <div className="admin-title d-flex py-2 mb-3 white">
                            <div
                                className={`admin-title-hamburger ml-2 ${
                                    showMenu ? "d-none" : ""
                                }`}
                            >
                                <MdMenu
                                    size={32}
                                    onClick={() => setShowMenu(true)}
                                />
                            </div>
                            <div>
                                <h3 className="ml-3">Logs</h3>
                            </div>
                        </div>
                        <div className="admin-logs-main py-3 white">
                            <div className="container-fluid h-100">
                                <div className="admin-logs-filter py-2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="filter-search">
                                                <div className="input-group mb-2">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search Person"
                                                    />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-outline-primary"
                                                            type="button"
                                                        >
                                                            Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="filter-date">
                                                <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                                                    <MdDateRange
                                                        size={38}
                                                        className="calendar-icon mr-2"
                                                    />
                                                    <h5 className="pt-2">
                                                        May 18, 2021
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin-logs-table">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead className="admin-logs-table-header">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Time</th>
                                                    <th scope="col">
                                                        Establishment
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <Redirect to="/backend/login" />
    )
}

export default AdminUserLogs