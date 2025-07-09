import { Sidebar } from 'primereact/sidebar';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';

type visibleProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SideBar({visible, setVisible}: visibleProps) {
  return (
    <>
        <Sidebar visible={visible} onHide={() => setVisible(false)} position="right">
            <aside className="h-full bg-white flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <Button
                    label="Cadastrar"
                    icon="pi pi-user-plus"
                    className="w-full p-button-sm"
                    />
                    <Button
                    label="Entrar"
                    icon="pi pi-sign-in"
                    className="w-full p-button-outlined p-button-sm"
                    />
                </div>

                <div className="flex flex-col items-center gap-2 mt-4">
                    <Avatar
                    icon="pi pi-user"
                    className="bg-gray-200 text-gray-700"
                    size="xlarge"
                    shape="circle"
                    />
                    <span className="text-sm text-gray-600">Visitante</span>
                </div>

                <div className="mt-6 text-xs text-gray-500">
                    <p className="mb-1">
                    <i className="pi pi-info-circle mr-2"></i>
                    Versão: 1.0.0
                    </p>
                    <p className="mb-1">
                    <i className="pi pi-cog mr-2"></i>
                    Configurações
                    </p>
                    <p className="mb-1">
                    <i className="pi pi-question-circle mr-2"></i>
                    Ajuda
                    </p>
                </div>
            </aside>
        </Sidebar>

    </>
  )
}
