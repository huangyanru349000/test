$scope.showDeployHistoryDetail = function (id) {
                    $scope.executionId = id;
                    var win = new tinyWidget.Window({
                        winId: "stage-current-deployHistoryDetail-view-win",
                        title: "部署历史",
                        //height: "auto",
                        //maxHeight: "750px",
                        height: '750px',
                        width: "1085px",
                        "content-type": "url",
                        content: "src/app/business/deploy/views/docker/stage/history.html",
                        minimizable: false,
                        maximizable: false,
                        resizable: false,
                        buttons: null,
                        beforeClose: function () {
                            $scope.waittingResponseForLog = false;
                        }
                    });
                    win.show();
                };
