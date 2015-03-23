  //获取学校
  function getUniversity(){
            //省份id
            var id = document.getElementById('province').value;
            var url = URL() + "IUSchoolList/getUnivs";
            var t = "{\"province_id\":" + id + "}";
            var json = [{
                'key': 'json',
                'type': '0',
                'value': t
            }];
            $.getJSON(url, function(data){
                if (data.status.succeed) {
					
                    var tmpl = '<option value="${univs_id}">${univs_name}</option>';
                    var s = zy_tmpl(tmpl, data.data.univs, zy_tmpl_count(data.data.univs));
                    var d = document.getElementById("school");
                    d.innerHTML =  "<option></option>"+s;
                }
                else 
                    alert("服务器连接失败，请检查网络。");
            }, 'json', function(err){
            }, 'POST', json);
        }
        
        //获取学院
        function getAcademy(){
            //省份id
            var id = document.getElementById('school').value;
            var url = URL() + "IUSchoolList/getAcademy";
            var t = "{\"univs_id\":" + id + "}";
            var json = [{
                'key': 'json',
                'type': '0',
                'value': t
            }];
            $.getJSON(url, function(data){
                if (data.status.succeed) {
                    var tmpl = '<option value="${academy_id}">${academy_name}</option>';
                    var s = zy_tmpl(tmpl, data.data.academy, zy_tmpl_count(data.data.academy));
                    var d = document.getElementById("academy");
                    d.innerHTML = "<option></option>"+ s;
                }
                else 
                    alert("服务器连接失败，请检查网络。");
            }, 'json', function(err){
            }, 'POST', json);
        }
		
		