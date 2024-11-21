import Link from "next/link";
import { CogFilled, SquaresFilled } from "@/components/icons";

export default function Menu() {
	return (
		<ul className="menu rounded-box w-full">
			<li>
				<Link href="#">Dashboard</Link>
			</li>
			<li>
				<details open>
					<summary>
						<SquaresFilled className="size-4" />
						Quản lý
					</summary>
					<ul>
						<li>
							<Link href="3">Dự án đã tham gia</Link>
						</li>
						<li>
							<Link href="3">Giải thưởng & thành tích</Link>
						</li>
						<li>
							<Link href="3">Kinh nghiệm làm việc</Link>
						</li>
						<li>
							<Link href="3">Học vấn</Link>
						</li>
						<li>
							<Link href="3">Kỹ năng</Link>
						</li>
						<li>
							<Link href="3">Đánh giá về tôi</Link>
						</li>
						<li>
							<Link href="3">Đối tác</Link>
						</li>
						<li>
							<Link href="3">Liên hệ với tôi</Link>
						</li>
						<li>
							<Link href="3">Dịch vụ</Link>
						</li>
					</ul>
				</details>
			</li>
			<li>
				<details open>
					<summary>
						<CogFilled className="size-4" />
						Cài đặt
					</summary>
					<ul>
						<li>
							<Link href="#">Thông tin</Link>
						</li>
					</ul>
				</details>
			</li>
		</ul>
	);
}
