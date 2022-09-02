package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class updateMemberServlet
 */
@WebServlet("/updateMemberServlet")
public class updateMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public updateMemberServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 'mid =' + id + '&mnm =' + nm + '&mpw =' + pw;
		request.setCharacterEncoding("utf-8");
		 response.setContentType("text/Json; charset = utf-8");
		
		String id = request.getParameter("mid");
		String nm = request.getParameter("mnm");
		String pw = request.getParameter("mpw");
		
		Member mem = new Member();
		mem.setAccountId(id);
		mem.setMemberPw(pw);
		mem.setMemberName(nm);
		
		int result = MemberManage.getInstance().updateMember2(mem);
		if (result == 1) {

	         String json = "{\"retCode\": \"succ\",\"memberId\": \"" + id + "\",\"memberPw\": \"" + pw
	               + "\",\"memberName\": \"" + nm + "\"}";
	         response.getWriter().print(json);
	      } else {
	         String json = "{\"retCode\": \"fail\"}";
	         response.getWriter().print(json);
	      }
		
	}

}
